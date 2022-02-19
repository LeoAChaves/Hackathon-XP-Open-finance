class SlideView {
  mostraSlide(contador) {
    if (contador == 0) {
      $(`.boxCards${3}`).css('display', 'none');
      $(`.boxCards${contador}`).css('display', 'flex');
    } else {
      $(`.boxCards${contador - 1}`).css('display', 'none');
      $(`.boxCards${contador}`).css('display', 'flex');
    }
  }
}

class SlideViewPrev {
  mostraSlide(contador) {
    if (contador == 3) {
      $(`.boxCards${0}`).css('display', 'none');
      $(`.boxCards${contador}`).css('display', 'flex');
    } else {
      $(`.boxCards${contador + 1}`).css('display', 'none');
      $(`.boxCards${contador}`).css('display', 'flex');
    }
  }
}
