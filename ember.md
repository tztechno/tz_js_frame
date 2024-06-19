###
# ember
###

---

---

Ember CLI（Command Line Interface）をインストールする手順は以下の通りです。Ember CLIはEmber.jsアプリケーションを開発するためのコマンドラインツールです。

1. **Node.jsとnpmのインストール**:
   Ember CLIをインストールするには、まずNode.jsとnpmが必要です。Node.jsのインストールには、公式のNode.jsウェブサイト（[https://nodejs.org/](https://nodejs.org/)）からダウンロードできます。Node.jsをインストールするとnpmも一緒にインストールされます。

2. **Ember CLIのグローバルインストール**:
   Node.jsとnpmがインストールされたら、ターミナル（コマンドプロンプト）を開き、次のコマンドでEmber CLIをグローバルにインストールします。

   ```bash
   npm install -g ember-cli
   ```

   このコマンドは、npmを使用してEmber CLIをインストールし、グローバルに（システム全体で使用可能な状態に）設定します。

3. **インストールの確認**:
   インストールが完了したら、以下のコマンドを使用してEmber CLIが正しくインストールされたか確認します。

   ```bash
   ember --version
   ```

   バージョン番号が表示されれば、Ember CLIのインストールが成功しています。

4. **新しいEmber.jsプロジェクトの作成**:
   Ember CLIを使って新しいプロジェクトを作成するには、任意のディレクトリで以下のコマンドを実行します。

   ```bash
   ember new my-ember-app
   ```

   `my-ember-app`は任意のプロジェクト名です。このコマンドにより、Ember.jsアプリケーションの初期セットアップが行われます。

5. **開発サーバーの起動**:
   新しいEmber.jsプロジェクトを作成したら、そのディレクトリに移動して開発サーバーを起動します。

   ```bash
   cd my-ember-app
   ember serve
   ```

   `ember serve`コマンドは、開発サーバーを起動し、デフォルトでは`http://localhost:4200`でアプリケーションをブラウザで確認できるようにします。

これで、Ember CLIのインストールと新しいEmber.jsプロジェクトの作成が完了しました。Ember CLIを使用することで、簡単にEmber.jsアプリケーションの開発を始めることができます。

---

Ember.jsでHTMLファイルをホストする場合、通常の静的なHTMLページを直接サーブするのではなく、Ember.jsアプリケーション内に組み込む方法が一般的です。以下に、Ember.jsアプリケーション内で外部のHTMLファイル（今回の場合は`index.html`）を表示する方法を説明します。

1. **Ember.jsプロジェクトの作成**:
   Ember.jsのプロジェクトを作成します。ターミナルで以下のコマンドを実行します。

   ```bash
   ember new my-ember-app
   cd my-ember-app
   ```

2. **HTMLファイルの配置**:
   Ember.jsの標準的な構成に従い、`public`ディレクトリにHTMLファイル（`index.html`）を配置します。

   ```plaintext
   my-ember-app/
   ├── app/
   ├── public/
   │   └── index.html   <-- ここに先ほどのHTMLを配置する
   ├── tests/
   ├── ...
   ```

   `public`ディレクトリは静的なファイルを配置するための場所です。

3. **Ember.jsアプリケーションにHTMLを組み込む**:
   Ember.jsでは、`{{iframe}}`を使用して外部のHTMLを表示することができます。以下の手順で、`index.html`を表示するためのコンポーネントを作成します。

   - **コンポーネントの作成**: Ember.js CLIを使用してコンポーネントを作成します。

     ```bash
     ember generate component iframe-wrapper
     ```

     上記のコマンドで`iframe-wrapper`という名前のコンポーネントが生成されます。

   - **コンポーネントのテンプレートを編集**: `app/templates/components/iframe-wrapper.hbs`を次のように編集します。

     ```handlebars
     {{! app/templates/components/iframe-wrapper.hbs }}

     <div class="iframe-wrapper">
       {{iframe src="/index.html" width="100%" height="600"}}
     </div>
     ```

     上記のコードでは、`{{iframe}}`ヘルパーを使用して`/index.html`を指定し、iframeとして表示しています。

4. **スタイルの追加** (オプション): 必要に応じて、`app/styles/app.css`などで`iframe-wrapper`クラスにスタイルを追加して、表示を調整することができます。

5. **サーバーの起動**:
   Ember.jsアプリケーションを起動します。

   ```bash
   ember serve
   ```

   ブラウザで`http://localhost:4200`にアクセスすると、Ember.jsアプリケーションが表示され、その中で`index.html`がiframeとしてロードされているはずです。

これで、Ember.jsアプリケーション内で外部のHTMLファイルを表示する方法が分かりました。Ember.jsのコンポーネントとして`{{iframe}}`を使うことで、外部のコンテンツをアプリケーションに統合することができます。

---

