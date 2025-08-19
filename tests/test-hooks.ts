import { test } from '@playwright/test';
import { ReceitaPage } from '../pages/ReceitaPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let receitaPage: ReceitaPage;
let checkoutPage: CheckoutPage;

 test.beforeEach(async ({ page }) => {
        receitaPage = new ReceitaPage(page);
        checkoutPage = new CheckoutPage(page);
    });

export { receitaPage, checkoutPage };