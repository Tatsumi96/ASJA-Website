## STRAPI DOC FILE
--- 
### How to run
```bash
docker compose ps
```
or 
```bash
docker run --rm -it \
  -v $(pwd)/strapi:/srv/app \
  -w /srv/app \
  node:22 bash
  ```
  ```bash
  npm run develop
  ```

  ### Tour file 
```
ASJA-Website/
 ├─ my-strapi-docker/
 │   ├─ docker-compose.yml
 │   └─ strapi/
 │       ├─ Dockerfile
 │       ├─ package.json
 │       ├─ package-lock.json
 │       ├─ src/
 │       ├─ config/
 │       └─ ...

```
