
function Pencil() {
  const currentPencil = Object.create(pencilFunctionStorage);
  return currentPencil;
}

const paper = {

}

const pencilFunctionStorage = {
  write: true;
}
