const data = {
    currentUser: 'currentUser',
    ideas: [
      {
        username: 'amyrobson',
        content:
          'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum. Qui reprehenderit reprehenderit incididunt eiusmod voluptate cupidatat cupidatat dolor. Incididunt sint cupidatat dolore cupidatat ut do dolor nostrud ullamco aliqua aliqua excepteur. Fugiat nostrud esse voluptate magna nostrud nostrud sint et. Irure excepteur irure ullamco occaecat dolor deserunt. Cillum fugiat sunt ullamco ad enim ea eiusmod do et dolor adipisicing mollit aliqua mollit.\r\n',
        score: 3,
      },
      {
        username: 'maxblagun',
        content:
          'Cupidatat veniam quis aliquip ut pariatur excepteur ut. Cupidatat reprehenderit nulla laborum dolore nulla voluptate cupidatat in. Sint tempor non duis sit deserunt culpa sunt labore eu sit consectetur. Excepteur reprehenderit et officia incididunt consectetur laborum consequat laboris excepteur ea adipisicing qui.\r\n',
        score: 10,
      },
      {
        username: 'maxblagun',
        content:
          'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore. Incididunt anim Lorem Lorem dolor voluptate deserunt cillum consequat ut. Ea fugiat culpa ex et pariatur dolor est officia ea dolore ullamco mollit. Cillum minim consequat ipsum deserunt velit mollit ad consectetur irure dolore proident qui.\r\n',
        score: 6,
      },
      {
        username: 'maxblagun',
        content:
          'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum. Commodo ullamco deserunt reprehenderit qui in anim aliqua officia do in reprehenderit Lorem. Ipsum non aute officia est nisi sunt non. Proident in eiusmod sint aliquip qui officia deserunt eiusmod sit. Mollit voluptate anim cillum cupidatat duis est ad excepteur consequat fugiat cillum velit esse. Quis dolore sit ullamco qui.\r\n',
        score: 8,
      },
      {
        username: 'currentUser',
        content:
          'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa. Adipisicing ullamco eu id sit velit ut laboris irure esse quis. Mollit minim laborum do exercitation sint magna ea ea eu eu laboris aliquip anim culpa. Consectetur eiusmod esse ipsum incididunt duis ea nisi qui duis pariatur.\r\n',
        score: 3,
      },
      {
        username: 'currentUser',
        content:
          'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad. Do dolor cillum ullamco excepteur eiusmod laboris dolore do Lorem. Exercitation eiusmod laborum enim culpa esse.\r\n',
        score: 1,
      },
      {
        username: 'amyrobson',
        content:
          'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat. Sunt labore incididunt ut culpa aliquip excepteur est. Enim Lorem dolor adipisicing veniam proident quis ad laborum in commodo qui. Proident elit ullamco aliqua non excepteur in fugiat consequat adipisicing ut eu id sunt laboris.\r\n',
        score: 7,
      },
    ],
  }
  const lists = document.querySelector('.ideaList');  
  const addIdea = document.forms.addIdea; 
  // 현재는 form의 name값으로 불러온것. 아이디 부여해서 getElementId로 가져와도 된다.
  // cosnt addIdea = document.getElementById('addIead');
  const you = data.currentUser;     
  let li = []; // 실제 li목록이 계속 갱신되어 저장됨
  init();

  // 초기화
  function init() {
    loadList(); 
    modify(); 
  }


  // li리스트 다시 뿌리기
  function loadList() {
    const html = []
    for(let i =0; i < data.ideas.length; i++) {  
        html.push(`
        <li class="card">
        <div class="card-header">
          <h2>${data.ideas[i].username}</h2>
          <div class="control">
            <button type="button" data-btn="delete">DELETE</button>
            <button type="button" data-btn="edit">EDIT</button>
          </div>
        </div>
        <div class="card-body">
        <p class="card-text">${data.ideas[i].content}</p>
        </div>
        <div class="card-footer score">
        <button type="button" class="btn btn-primary downVote">-</button>
        <span class="num">${data.ideas[i].score}</span>
        <button type="button" class="btn btn-primary upVote">+</button>
        </div>
        </li>
      `); 
    }
    lists.innerHTML = html.join('');   
    li = lists.querySelectorAll('li');
    userCheck();
    vote();
  }
 


// 수정, 삭제버튼
function modify() { 
  li.forEach(function(e,idx) { 
    e.addEventListener('click',function(event) {
      // let btn = event.target;
      if(event.target.dataset.btn == 'delete') {
        e.remove();
        console.log('deleted success')
      } else if(event.target.dataset.btn == 'edit') {
        alert('edit is not avalible')
      }
    })
  }) 
} 

// 본인 계정인지 체크
function userCheck() { 
  li.forEach(function(e,idx) {
    let same = e.querySelector('h2').innerHTML == data.currentUser;
    if(same) {
      e.classList.add('you')
    }
  })
}

// 새 글 추가
addIdea.addEventListener('submit',function(e) {
  e.preventDefault();
  
  console.log(e)
  console.log(e.target)
  console.log(e.target.username)
  console.log(this)
  console.log(this.username)
   

  let newData = {
    username : e.target.username.value,
    content :this.description.value,
    score :0
  }
  
  data.ideas.push(newData);  
  this.reset();
  
  init();
})

// 투표 
function vote() { 
   li.forEach(function(e,idx) {
     e.addEventListener('click',function(event,index) {
       let num = this.querySelector('.num');
       let score = parseInt(num.innerHTML); 
       if( event.target.classList.contains('upVote')) {
          score++;
       } else {
          score--;
       }
       num.innerHTML = score; 
     })
   })
}