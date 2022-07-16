# Find AWS Open Data
このProjectはReact + AWS Amplifyを使ったアプリケーションサンプルとして開発したものです。

以下で起動できますが、オープンデータのリストを表示するには検索データの作成とAmplifyの設定が別途必要です。

```
git clone https://github.com/mikkikimasutaro/findawsopendata.git
cd findawsopendata
npm install
npm start
```

## 機能
AWSが提供するオープンデータのリストをキーワードで検索できます。
AWS LABが公開する以下のページをバックエンドでクロールしてDynamoDBに保存し、AWS AppSyncを用いたGraphQLでDynamoDBから情報を取得しています。
https://github.com/awslabs/open-data-registry

## ソフトウェア構成
 - React 18.2.0 : 画面アプリ本体
 - Material UI 5.8.7 : マテリアルUI
 - react-markdown 6.3.0 : Markdown形式で記述されたデータの描画
 - AWS Amplify 4.3.26 : ビルドとデプロイ、GraphQL（AppSync）、データストア（DynamoDB）


## License
MIT License

Copyright (c) 2022 Kensuke Kanamori