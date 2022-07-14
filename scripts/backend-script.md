## データ収集
```
git clone https://github.com/awslabs/open-data-registry.git
```

## 加工
```
cd datasets/
jq '.Tags' *.json > tags.json
sort tags.json > tags_sorted.txt
uniq -c tags_sorted.txt | sort -nr > tags_uniq.txt
```
