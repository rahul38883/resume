inotifywait -e close_write,moved_to,create -m . |
while read -r directory events filename; do
  if [ "$filename" = "index.html" ]; then
    sh ./abcd.sh
  fi
done