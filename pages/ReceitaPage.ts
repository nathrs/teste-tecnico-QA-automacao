// pages/ReceitaPage.ts
import { Page, Locator } from '@playwright/test';

// Use a constante para o template da URL
const URL_BASE = 'https://s.mevosaude.com.br/{{TOKEN}}';

export class ReceitaPage {
    readonly page: Page;
    readonly verTokensButton: Locator;
    readonly verPrecosButton: Locator;
    readonly tokenList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.verTokensButton = page.getByRole('button', { name: 'Ver tokens' });
        this.verPrecosButton = page.locator('#ver_precos_principal');
        this.tokenList = page.getByRole('listitem', { name: /token:/i });
    }

    async navigateToReceita(token: string): Promise<void> {
        const urlFinal = URL_BASE.replace('{{TOKEN}}', token);
        await this.page.goto(urlFinal);
    }

    async clickVerTokens(): Promise<void> {
        await this.verTokensButton.click();
    }

    async clickVerPrecos(): Promise<void> {
        await this.verPrecosButton.click();
    }
}