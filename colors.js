function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value == '어둡게'){
    target.style.backgroundColor = 'black';
    target.style.color = 'FloralWhite';
    self.value = '밝게';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = 'Lime';
      i = i + 1;
    }
  } else {
    target.style.backgroundColor = 'FloralWhite';
    target.style.color = 'black';
    self.value = '어둡게';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = 'RebeccaPurple';
      i = i + 1;
    }
  }
}
