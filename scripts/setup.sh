INITIAL_PATH="$HOME"
INSTALL_PATH=(".local" 'share' 'theme-compositor')

for i in "${INSTALL_PATH[@]}"
do
  echo $i
  INITIAL_PATH="$INITIAL_PATH/$i"
  if [[ ! -f $INITIAL_PATH ]]
  then
    echo "create $i"
    mkdir $INITIAL_PATH
  fi
done

echo $INITIAL_PATH
npm i 

sudo cp -r ./* $INITIAL_PATH
cd $INITIAL_PATH

sudo npm link
