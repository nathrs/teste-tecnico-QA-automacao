// pages/CheckoutPage.ts
import { Page, Locator } from '@playwright/test';

// Use a constante para o template da URL
const URL_CARRINHO = 'https://s.mevosaude.com.br/{{TOKEN}}/checkout';

export class CheckoutPage {
    readonly page: Page;
    readonly trocarMedicamentoButton: Locator;
    readonly trocarButton: Locator;
    readonly novoMedicamento: Locator;
    readonly FecharPedidoButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.trocarMedicamentoButton = page.locator('#med_replacement_15717');
        this.trocarButton = page.getByRole('button', { name: 'Trocar' });
        this.novoMedicamento = page.getByText(/Dipirona/i);
        this.FecharPedidoButton = page.getByRole('button', { name: 'Fechar pedido' });
    
    }

    // O método de navegação agora aceita o token como argumento
    async navigateToCheckout(token: string): Promise<void> {
        const urlFinal = URL_CARRINHO.replace('{{TOKEN}}', token);
        await this.page.goto(urlFinal);
    }

    async clickTrocarMedicamento(): Promise<void> {
        await this.trocarMedicamentoButton.click();
    }

    async clickTrocar(): Promise<void> {
        await this.trocarButton.click();
    }
}