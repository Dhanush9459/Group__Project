import { expect, test } from '@playwright/test';

test.describe('Restaurant', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/contact');
  });

  test('should display the contact information section', async ({ page }) => {
    await page.waitForSelector('text=CONTACT INFO :', { state: 'visible' });
    const contactInfo = page.locator('text=CONTACT INFO :');
    await expect(contactInfo).toBeVisible();
  });

  test('should display the address label', async ({ page }) => {
    await page.waitForSelector('text=123 Stanza Avenue', { state: 'visible' });
    const addressLabel = page.locator('text=123 Stanza Avenue');
    await expect(addressLabel).toBeVisible();
  });
});


test.describe('Restaurant Services', () => {
  const data = [
    {
      id: 1,
      title: "CATERING",
      description:
        "At Soul Kitchen we pride ourselves on fresh flavours coupled with impeccable service. We assure you, the events hosted at Soul Kitchen have always Truly Legendary.Please call us for further enquiry.",
      price: "",
      logoBg: "",
    },
    {
      id: 2,
      title: "DINE-IN",
      description:
        "Join us for a dining experience that will leave you with a newfound appreciation for the rich tapestry of Indian cuisine.HOURS OF OPERATION:(Tuesday – Thursday) 11:00 AM – 10:30 PM(Friday – Saturday)11:00 AM – 11:00 PM Sunday                          11:00 AM – 10:30 PM",
      price: "",
      logoBg: "",
    },
  ];

  test.beforeEach(async ({ page }) => {
    
  });

  test('should display the CATERING description', async () => {
    const cateringDescription = data.find(item => item.title === "CATERING")?.description;
    await expect(cateringDescription).toContain("At Soul Kitchen");
  });

  test('should display the DINE-IN description', async () => {
    const dineInDescription = data.find(item => item.title === "DINE-IN")?.description;
    await expect(dineInDescription).toContain("Join us for a dining experience");
  });
});

const mockMenuData = {
  starters: [
    {
      id: 1,
      title: 'Starters 1',
      description: 'Description for Starters 1',
      price: '$10',
      logoBg: '',
    },
  ],
  breakfast: [
    {
      id: 1,
      title: 'Breakfast 1',
      description: 'Description for Breakfast 1',
      price: '$8',
      logoBg: '',
    },
  ],
  dinner: [
    {
      id: 1,
      title: 'Dinner 1',
      description: 'Description for Dinner 1',
      price: '$15',
      logoBg: '',
    },
  ],
  drinks: [
    {
      id: 1,
      title: 'Drink 1',
      description: 'Description for Drink 1',
      price: '$5',
      logoBg: '',
    },
   
  ],
};


  test('should display starters section', async () => {
   
  });

  test('should display breakfast section', async () => {
  });

  test('should display dinner section', async () => {
  });

  test('should display drinks section', async () => {
  });
  
  test('should navigate to the menu page when "MENU" is clicked', async () => {
  });

  test('should navigate to the home page when "HOME" is clicked', async () => {
  });

  test('should open the sign-up link in a new tab when "SIGN UP" is clicked', async () => {
  });

  test('should open the services link in a new tab when "Services" is clicked in the menu', async () => {
  });

  test('should navigate to the contact page when "Contact" is clicked in the menu', async () => {
  
  });

test.describe('Footer Component', () => {
  let page: any; // Use the appropriate type for your Playwright setup

  
  });

  test('should have "Menu" link', async () => {
    // Your test logic here to check if the "Menu" link is present and clickable.
    // Example: await page.click('text=Menu');
  });

  test('should have "Restaurant" link', async () => {
    // Your test logic here to check if the "Restaurant" link is
  })