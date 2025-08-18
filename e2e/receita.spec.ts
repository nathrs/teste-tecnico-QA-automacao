import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

const URL_BASE = 'https://s.mevosaude.com.br/{{TOKEN}}';
const URL_CARRINHO = 'https://s.mevosaude.com.br/{{TOKEN}}/checkout';
// const RECEITA_TESTE = 'MIXF53M';

describe('Receita', () => {
  test('Carregar receita', async ({ page }) => {
    await page.goto('');
  });
});
