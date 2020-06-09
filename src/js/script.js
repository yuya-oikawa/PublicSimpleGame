// 敵ライフ
let enemyname = "不運";
let enemyHp = 100;

// クールタイム
const coolingTime = 2;
let remainingCoolTime = 0;

// LV
let LV=0;

// init
document.getElementById('enemyHp').textContent = enemyHp;


//攻撃
document.getElementById('attack').addEventListener('click', function() {
  enemyDamage(100);
});

//必殺の一撃
document.getElementById('Technique').addEventListener('click', function() {
  if(remainingCoolTime > 0){
    addMessage("必殺の一撃は連続使用できない");
    addMessage("あと" + remainingCoolTime + "ターンの冷却が必要だ");
  }else{
    enemyDamage(100);
    remainingCoolTime = coolingTime;  
  }
});

//必殺の一撃
document.getElementById('escape').addEventListener('click', function() {
  addMessage(enemyname + "からは逃げられない!!");
});

// ダメージ
function enemyDamage(Damage) {
  enemyHp -= Damage;
  document.getElementById('enemyHp').textContent = enemyHp;
  addMessage(enemyname+ "へ" + Damage + "のダメージ");
  if (enemyHp < 0) {
    addMessage("オーバーキル!! だが" + enemyname + "は倒れない!!");
  }
  // 一旦ここでクールタイム解決
  coolingTimeEnd();
}

// log出力
function addMessage(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  console.log(p);
  document.getElementById('messagelog').appendChild(p);
}

// クールタイム決済
function coolingTimeEnd() {
  remainingCoolTime -= 1;
  if (remainingCoolTime > 0){
    document.getElementById('Technique').classList.add("coolTime");
  }else{
    document.getElementById('Technique').classList.remove("coolTime");
  }
}

//敵の作成
document.getElementById('Creation').addEventListener('click', function() {
  LV += 1;
  enemyHp = 100 + (Math.floor(Math.random() * 10) * LV );
  document.getElementById('enemyHp').textContent = enemyHp;
  addMessage(LV+"体目の"+enemyname + "が現れた");
});
