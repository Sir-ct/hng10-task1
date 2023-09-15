# Documentation

## setup and installation

- copy link by clicking on the `code` button
- navigate to your preferred directory and clone using `git clone <url>` command on your local machine
- navigate into the cloned project `cd <folder_name>`
- run `npm install` to install the dependencies from package.json file
- run `npm run dev` to start the application on `localhost:5001`

## API Usage

* Base Url: https://task1ct.onrender.com

### endpoints

#### add user - `/api/`
method: PUT

payload - `{
    name: string *required
}`

#### get user - `/api/:user_name`
method: GET

#### edit user - `api/:user_name`
method: PUT

payload - `{
    name: string
}`

#### delete user - `/api/:user_name`
method: DELETE


