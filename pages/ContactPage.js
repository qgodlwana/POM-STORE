exports.ContactPage = class ContactPage{
    constructor(page){
        this.page = page;
        this.contactLink = '//a[normalize-space()="Contact"]';
        this.contactEmail = '//input[@id="recipient-email"]';
        this.contactName = '//input[@id="recipient-name"]';
        this.contactMessage = '//textarea[@id="message-text"]';
        this.sendMessageBtn='//button[normalize-space()="Send message"]';
    }
    async contactUs(emailAddress, fullname, message){
        await this.page.locator(this.contactLink).click();        
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('message!!')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.contactEmail).fill(emailAddress);
        await this.page.locator(this.contactName).fill(fullname);
        await this.page.locator(this.contactMessage).fill(message); 
        await this.page.locator(this.sendMessageBtn).click();       
    }
}