@isTest
private class AngularAccountControllerTest {

    private static User testAdminUser = new User(Id = UserInfo.getUserId());

    /**
     * コンストラクタ
     */
    @isTest
    static void AngularAccountControllerTest() {
        System.runAs(testAdminUser) {

            Test.startTest();

            AngularAccountController cls = new AngularAccountController();

            Test.stopTest();
        }
    }

    /**
     * 取引先情報取得
     */
    @isTest
    static void getAccountsTest() {
        System.runAs(testAdminUser) {

            Test.startTest();

            List<Account> results = AngularAccountController.getAccounts();

            Test.stopTest();

            System.assertEquals(results.isEmpty(), true);
        }
    }
}