#docker run -itd --rm --name typescript_project -p 4200:4200 --workdir "/src/2. SPA" -v $(pwd):/src guillo/angular ng server --host 0.0.0.0 --port 4200 
#docker run -itd --rm --name typescript_project -p 4200:4200 --workdir "/src/2. SPA" -v $(pwd):/src guillo/angular 
docker run -itd --rm --name angular -p 4200:4200 --workdir "/src" -v $(pwd):/src guillo/angular 
