# Find AWS Open Data
このProjectはReact + AWS Amplifyを使ったアプリケーションサンプルとして開発したものです。

## 機能
AWSが提供するオープンデータのリストをキーワードで検索できます。
AWS LABが公開する以下のページをクロールして情報を取得しています。
https://github.com/awslabs/open-data-registry

### メモ
#### Tagの抽出、頻出順にソート
$ jq '.Tags' *.json > tags.json
$ sort tags.json > tags_sorted.txt
$ uniq -c tags_sorted.txt | sort -nr > tags_uniq.txt