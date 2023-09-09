// アクションボタンがクリックされたときにポップアップを表示
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      // ページ上のテキストを置換するコードを実行
      replaceText();
    },
  });
});