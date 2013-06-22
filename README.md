jQuery Input Description
========================
input や textarea 内にちょっとした説明や入力例を表示する jQuery プラグインです。

使い方
-----
1. jQuery と jQuery Input Description をページに読みこみます。

        <script type="text/javascript" src="./js/jquery.min.js"></script></head>
        <script type="text/javascript" src="./js/jquery.input-description.js"></script>

2. 説明を入れたい要素に Input Description の設定をします。

        <script type="text/javascript">
        jQuery(function($){
          $('#example').inputDescription({
            value:'テキストを入力'
          });
        });
        </script>

   以上で完了です！

オプション
------
使用できるオプションは、以下の通りです。

        jQuery(function($){
          $('#example').inputDescription({
            value:'テキスト', // 
            color:'#999'
          });
        });
