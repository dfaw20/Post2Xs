// content.js

// ページ読み込み後にテキストを置換
replaceText();

// ページの変更を監視して、動的にテキストを置換
const observer = new MutationObserver(replaceText);
observer.observe(document.body, { subtree: true, characterData: true, childList: true });

// ページ上のテキストを"ポスト"から"X's"に置換する関数
function replaceText() {
  const elements = document.querySelector(`[data-testid="tweetButtonInline"]`);

  if (elements) {
    // 要素内の入れ子構造をトラバースし、目当てのテキストノードを取得
    let textNode;
    const traverse = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        textNode = node;
      } else {
        for (const childNode of node.childNodes) {
          traverse(childNode);
        }
      }
    };
    traverse(elements);
  
    if (textNode) {
      // テキストノードの内容を書き換え
      textNode.textContent = textNode.textContent.replace(/ポスト/g, "X's");

      // 1回書き換えたら止める
      observer.disconnect();
    }
  }
}
  