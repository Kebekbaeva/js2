const block = document.querySelector(".block")
const blockMove = document.querySelector('.blockMove')


let position = 0;
let topPosition = 0;

const blockMoveAction = () => {
    if (position < 440 && topPosition == 0) {
        position += 15;
        block.style.left = `${position}px`;
        setTimeout(() => {
            blockMoveAction()
        }, 100);
    } else if (position >= 440 && topPosition < 440) {
        topPosition += 15;
        block.style.top = `${topPosition}px`;
        setTimeout(() => {
            blockMoveAction()
        }, 80);
    } else if (position > 0 && topPosition >= 440) {
        position -= 15;
        block.style.left = `${position}px`;
        setTimeout(() => {
            blockMoveAction()
        }, 100);
    } else if (position == 0 && topPosition > 0) {
        topPosition -= 15;
        block.style.top = `${topPosition}px`;
        setTimeout(() => {
            blockMoveAction()
        }, 80)
    };
};

blockMove.addEventListener("click", () => {
    blockMoveAction()
});

// HW2


let i = 0;

let id = setInterval(
    function () {
        i++;
        console.log("Прошло " + i + " сек.");
        if (i == 5) {
            clearInterval(id);
        }
    }, 1000);