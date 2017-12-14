# Instalação das ferramentas

## Linux Debian*

**Node.js** e **npm** (Opcional)

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
nvm install node
node --version
npm --version
```

**yarn**

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

**React-Native CLI**

```bash
yarn global add create-react-native-app
```

**Configuração**

```bash
echo "fs.inotify.max_user_instances=1024" | sudo tee -a /etc/sysctl.conf
echo "fs.inotify.max_user_watches=12288" | sudo tee -a /etc/sysctl.conf
```

> Você precisará reiniciar a máquina para configuração fazer efeito.
 
## Editores de código e IDE

**vscode** (recomendado)
https://code.visualstudio.com/

```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt-get update
sudo apt-get install code
```

**atom.io**
https://atom.io/
