import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById(`add-text`).value;
  document.getElementById(`add-text`).value = ``;

  //div生成
  const div = document.createElement(`div`);
  div.className = `list-row`;

  // liタグ生成
  const li = document.createElement(`li`);
  li.innerText = inputText;

  // button完了タグ生成
  const completeButton = document.createElement(`button`);
  completeButton.innerText = `完了`;
  completeButton.addEventListener(`click`, () => {
    //押された完了ボタンの親タグdivを未完了から削除
    const deleteTarget = completeButton.parentNode;
    deleteFromIncompleteList(deleteTarget);

    //完了ボタンの親タグを完了リストに追加
    const addTarget = completeButton.parentNode;

    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement(`li`);
    li.innerText = text;

    //buttonタグ生成
    const backbutton = document.createElement(`button`);
    backbutton.innerText = `戻す`;
    backbutton.addEventListener(`click`, () => {
      const completeTarget = backbutton.parentNode;
      const targetText = completeTarget.firstElementChild.innerText;
      completeTarget.textContent = null;
      const completeLi = document.createElement(`li`);
      completeLi.innerText = targetText;
      completeTarget.appendChild(completeLi);
      completeTarget.appendChild(completeButton);
      completeTarget.appendChild(deleteButton);
      document.getElementById(`incomplete-list`).appendChild(completeTarget);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);
    //完了リストに追加
    document.getElementById(`complete-list`).appendChild(addTarget);
  });

  // button削除タグ生成
  const deleteButton = document.createElement(`button`);
  deleteButton.innerText = `削除`;
  deleteButton.addEventListener(`click`, () => {
    //押された削除ボタンの親タグdivを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById(`incomplete-list`).appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById(`incomplete-list`).removeChild(target);
};

//完了リストから指定の要素を削除
// const deleteFromCompleteList = (target) => {
//   document.getElementById(`complete-list`).removeChild(target);
// };

document
  .getElementById(`add-button`)
  .addEventListener(`click`, () => onClickAdd());
