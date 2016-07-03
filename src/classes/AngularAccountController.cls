public with sharing class AngularAccountController {

    /**
     * コンストラクタ
     */
    public AngularAccountController() {
        
    }

    /**
     * 取引先情報取得
     */
    @RemoteAction
    public static List<Account> getAccounts() {
        return [SELECT Id,Name,AccountNumber FROM Account ORDER BY Name ASC LIMIT 200];
    }
}