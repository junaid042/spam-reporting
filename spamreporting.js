function onSpamReport(o){Office.context.mailbox.item.getAsFileAsync({asyncContext:o},(o=>{if(o.status===Office.AsyncResultStatus.Failed)return void console.log(`Error encountered during message processing: ${o.error.message}`);const e=o.asyncContext,t=e.options,n=e.freeText;console.log(e),console.log(t),console.log(n),o.asyncContext.completed({onErrorDeleteItem:!0,moveItemTo:Office.MailboxEnums.MoveSpamItemTo.JunkFolder,showPostProcessingDialog:{title:"Contoso Spam Reporting",description:"Thank you for reporting this message."}})}))}Office.actions.associate("onSpamReport",onSpamReport);