# Find AWS Open Data
このProjectはReact + AWS Amplifyを使ったアプリケーションサンプルとして開発したものです。

## 機能
AWSが提供するオープンデータのリストをキーワードで検索できます。
AWS LABが公開する以下のページをバックエンドでクロールしてDynamoDBに保存し、AWS AppSyncを用いたGraphQLでDynamoDBから情報を取得しています。
https://github.com/awslabs/open-data-registry

## ソフトウェア構成
 - React 18.2.0 : 画面アプリ本体
 - AWS Amplify 4.3.26 : Build、Deploy
    - AppSync : GraphQL
    - DynamoDB  : オープンデータの保存


## License
MIT License

Copyright (c) 2022 Kensuke Kanamori