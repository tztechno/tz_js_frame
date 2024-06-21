###
# hapi
###

---
---
---
---
---

Hapi（またはHapi.js）は、Node.js用の強力なフレームワークで、特にAPIの作成やウェブアプリケーションの開発に向いています。Hapiをインストールする手順を以下に示します。

### Hapiのインストール手順

1. **Node.jsとnpmのインストール**:
   - Hapiを使用するためには、まずNode.jsとnpmが必要です。最新のNode.jsをインストールしてください。Node.jsのインストール方法については、前述の手順を参照してください。

2. **新しいプロジェクトのディレクトリを作成**:
   - Hapiプロジェクトを開始するために、任意のディレクトリで新しいプロジェクトディレクトリを作成します。

     ```
     mkdir my-hapi-project
     cd my-hapi-project
     ```

3. **npmでHapiをインストール**:
   - npmを使用してHapiをインストールします。

     ```
     npm install @hapi/hapi
     ```

   - `@hapi/hapi` は、Hapiフレームワークの最新バージョンをインストールするためのパッケージです。

4. **Hapiのセットアップと使用**:
   - Hapiを使用する準備が整いました。以下は、簡単な例として、Hapiを使ってサーバーを立ち上げる方法です。

     ```javascript
     const Hapi = require('@hapi/hapi');

     const init = async () => {
       const server = Hapi.server({
         port: 3000,
         host: 'localhost'
       });

       server.route({
         method: 'GET',
         path: '/',
         handler: (request, h) => {
           return 'Hello, Hapi!';
         }
       });

       await server.start();
       console.log('Server running on %s', server.info.uri);
     };

     process.on('unhandledRejection', (err) => {
       console.log(err);
       process.exit(1);
     });

     init();
     ```

   - この例では、`@hapi/hapi` パッケージを使用してHapiサーバーを設定し、ルートを定義しています。`npm install @hapi/hapi` コマンドでインストールされたバージョンのHapiが必要です。

5. **サーバーの起動と動作確認**:
   - 上記のコードを `app.js` などのファイルに保存し、以下のコマンドでサーバーを起動します。

     ```
     node app.js
     ```

   - サーバーが起動したら、ブラウザで `http://localhost:3000` を開くと、"Hello, Hapi!" と表示されるはずです。

これで、Hapiフレームワークを使ったNode.jsのウェブアプリケーションの基本的なセットアップが完了しました。Hapiは豊富な機能を持つフレームワークであり、さまざまな用途に適しています。

---
