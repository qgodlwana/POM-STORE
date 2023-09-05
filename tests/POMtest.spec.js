import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage'; 
import { CartPage} from '../pages/CartPage';

const { test, expect } = require('@playwright/test');

test('Page Object Model Testing', async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await page.waitForTimeout(3000);
  await login.login('Qaqambile', 'Godlwana')
  await page.waitForTimeout(4000);
  await login.logout();
  await page.waitForTimeout(3000);

  //home
  const home = new HomePage(page)
  await home.addProductToCart("Nexus 6")
  await page.waitForTimeout(3000)
  await home.gotoCart();

  //Cart
  const cart = new CartPage(page)
  await page.waitForTimeout(3000)
  const status = await cart.checkProductInCart('Nexus 6')
  expect(await status).toBe(true);
});
