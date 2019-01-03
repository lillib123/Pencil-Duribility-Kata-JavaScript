
function Pencil() {
  const currentPencil = Object.create(pencilFunctionStorage);
  return currentPencil;
}

const paper = {
  currentWriting: ""
}

const pencilFunctionStorage = {
  write: true
}
