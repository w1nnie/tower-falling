
(function () {

    /**
     * STEP.1 元となるコンテナを用意。画面に描画される要素は全てこの下にぶら下がる
     */
    let stage = new PIXI.Container();

    /**
     * STEP.2 描画するためのレンダラーを用意。引数は描画領域の幅、高さ、オプション
     */
    let renderer = PIXI.autoDetectRenderer(640, 360, {
    antialias:        true,     // アンチエイリアスをONに
    backgroundColor : 0x00ffd4, // 背景色
    //  transparent:      true,     // 背景を透過にしたい場合はこちらを指定
    });

    /**
     * STEP.3 #stage のDOM要素に view を追加
     */
    document.getElementById('stage').appendChild(renderer.view);

    /**
     * animation関数を定義
     */
    var animation = function () {
    // 再帰的に次のアニメーションフレームで animation関数を呼び出す
    requestAnimationFrame(animation);

    // 描画
    renderer.render(stage);
    };

    /**
     * animation関数を呼び出す
     */
    animation();

    // var ttrGirl = PIXI.Texture.fromImage('../img/chara.png');
    // var sprGirl = new PIXI.Sprite(ttrGirl);
    // stage.addChild(sprGirl);
    const square = new PIXI.Graphics();
    square.width = 100;
    square.height = 100;
    square.x = 100;
    square.y = 100;
    square.beginFill(0xff00ff);
    square.drawRect(0,0,100,100);
    square.endFill();
    stage.addChild(square);

}());