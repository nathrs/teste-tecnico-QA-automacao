// tests/mevoSaude.spec.ts
import { test, expect } from '@playwright/test';
import { ReceitaPage } from '../pages/ReceitaPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { tokenData } from '../test-data/tokenData';
import { medicamentosData } from '../test-data/MedicamentosData';

test.describe('Testes de Funcionalidade da Receita', () => {
    let receitaPage: ReceitaPage;
    let checkoutPage: CheckoutPage;
    const testToken = tokenData.TokenCliente[0].tokenTeste;

    test.beforeEach(async ({ page }) => {
        receitaPage = new ReceitaPage(page);
        checkoutPage = new CheckoutPage(page);
    });

    test('Verificar a exibição de tokens da receita', async ({ page }) => {
        await receitaPage.navigateToReceita(testToken);
        
        const tokenElement = page.getByText(testToken, { exact: true });
        await expect(tokenElement).toBeVisible();

    });

    test('Validar a presença do botão Ver Preços', async ({ page }) => {
        await receitaPage.navigateToReceita(testToken);
        await expect(receitaPage.verPrecosButton).toBeVisible();
    });

    test('Verificar navegação da receita para o carrinho', async ({ page }) => {
        await receitaPage.navigateToReceita(testToken);
        await expect(receitaPage.verPrecosButton).toBeVisible();
        await receitaPage.clickVerPrecos();
        
        await expect(page).toHaveURL(/checkout/);
        await expect(checkoutPage.FecharPedidoButton).toBeVisible();
    });

    test('Validar funcionalidade de troca de medicamento', async ({ page }) => {
        await checkoutPage.navigateToCheckout(testToken);
        
        await checkoutPage.clickTrocarMedicamento();
        
        const fnctrocaMedicamento = page.getByRole('button', { name: 'Trocar' }).first();
       await expect(fnctrocaMedicamento).toBeVisible();
       await fnctrocaMedicamento.click();

       await expect(checkoutPage.FecharPedidoButton).toBeVisible();
        
          });
});