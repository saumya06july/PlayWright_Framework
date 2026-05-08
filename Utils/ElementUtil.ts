import { Expect,Locator,Page } from "@playwright/test";
type FlexLocator =string | Locator;
export class ElementUtil
{
    
    private page:Page;
    private defaulttimeout:number=30000;
    

    constructor(page:Page,timeout:number=30000)
    {
        this.page=page;
        this.defaulttimeout=timeout;
    }

    private getLocator(locator1:FlexLocator,index ?:number ):Locator

    {
       if(typeof locator1==='string')
       {
         if(index)
         {
            return  this.page.locator(locator1).nth(index);
         }
         else{
            return this.page.locator(locator1).first();
         }
       }
       else{
        if(index)
        {
           return locator1.nth(index);
        }
        else{
            return locator1.first();
        }
       }
       
    }

     async doClick(locator:FlexLocator )
    {
        await this.getLocator(locator).click({timeout :this.defaulttimeout})
    }
     async doDoubleClick(locator:FlexLocator )
    {
        await this.getLocator(locator).dblclick({timeout :this.defaulttimeout});
    }
     async doRightClick(locator:FlexLocator )
    {
        await this.getLocator(locator).click({button :'right',timeout :this.defaulttimeout});
    }

     async doFill(locator:FlexLocator ,text:string,timeout:number)
    {
        await this.getLocator(locator).fill(text,{timeout: this.defaulttimeout});
    }
     async doType(locator:FlexLocator ,text:string,delay:number=500,timeout:number)
    {
        await this.getLocator(locator).pressSequentially(text,{delay,timeout:this.defaulttimeout});
    }
   
    public async isDisabled(locator:FlexLocator ):Promise<boolean>
    {
      return await this.getLocator(locator).isDisabled();
    }
    public async isVisible(locator:FlexLocator ):Promise<boolean>
    {
      return await this.getLocator(locator).isVisible();
    }
    
    public async ischecked(locator:FlexLocator ):Promise<boolean>
    {
      return await this.getLocator(locator).isChecked();
    }
    async isVisibleElement(locator:FlexLocator)
    {
        return this.getLocator(locator).isVisible();
    }
     
    public async isHidden(locator:FlexLocator ):Promise<boolean>
    {
      return await this.getLocator(locator).isHidden();
    }
    /**
     * 
     * @param locator Get the text content of a element
     * @returns 
     */

    async getText(locator:FlexLocator):Promise<string >
    {
        let text= await this.getLocator(locator).innerText({timeout:this.defaulttimeout});
        return text;
    }

    /**
     * 
     * @param locator Get Attribute Value of an Element
     * @returns 
     */
    async getAttributeValue(locator:FlexLocator,attribute:string):Promise<string | null >
    {
        let attribute_Value=await this.getLocator(locator).getAttribute(attribute);
        return attribute_Value;
    }
 /**
  * 
  * @param locator Get the entered Value of a Element
  * @returns 
  */

 async getInputValue(locator:FlexLocator):Promise<string>
 {
   return await this.getLocator(locator).inputValue({timeout:this.defaulttimeout});
 }

   // ====================Wait for Element to be Visible=====================
     public async waitforElementVisible(locator:FlexLocator ) :Promise<boolean>
    {
        try{
            await this.getLocator(locator).waitFor({state:'visible'});
            return true;
        }
        catch
        {
            return false;
        }
    }
    /**
     * Get all Text content from multiple Elements
     */
     async getAllInnerTexts(locator:FlexLocator)
     {
        await this.getLocator(locator).allInnerTexts();
     }

    /**
     * wait for the Element to be attached in dom
     */

      public async waitforElementToBeAttached(locator:FlexLocator ) :Promise<boolean>
    {
        try{
            await this.getLocator(locator).waitFor({state:'attached'});
            return true;
        }
        catch
        {
            return false;
        }
    }
    /**
     * Wait for pageload
     */

    async waitforPageloadState(state : 'load' | 'networkidle' | 'domcontentloaded' ='load'):Promise<void>
    {
        await this.page.waitForLoadState(state);
    }

    /**
     * Wait for specific timeout
     */

    async sleep(timeout:number)
    {
       await this.page.waitForTimeout(timeout);
    }

    /**
     * Drop Down Util Select based
     */

    async selectByText(text:string,locator:FlexLocator)
    {
        await this.getLocator(locator).selectOption({label:text},{timeout: this.defaulttimeout});
    }
     async selectByValue(text:string,locator:FlexLocator)
    {
        await this.getLocator(locator).selectOption({value:text},{timeout: this.defaulttimeout});
    }

      async selectByIndex(index:number,locator:FlexLocator)
    {
        await this.getLocator(locator).selectOption({index:index},{timeout: this.defaulttimeout});
    }

}