let backgroundMusic;

function preload() {
  // 음악 파일 로드
  backgroundMusic = loadSound('assets/music.mp3');
}

function setup() {
  // 캔버스 생성
  createCanvas(windowWidth, windowHeight, WEBGL);

  // 원근 투영 설정
  ortho(-width / 2, width / 2, -height / 2, height / 2, -4000, 4000);

  // 음악 재생
  backgroundMusic.loop();
}

function draw() {
  // 배경 설정
  background('#03030A');

  // 크기 조절 변수
  let scl = 90;

  // 마우스로 화면 회전 가능하도록 설정
  orbitControl();

  // 첫 번째 주제부 위치 계산
  let topic1X = 180;
  let topic1Y = 160;
  let topic1Z = 200;

  // 주제부 그리기
  push();
  translate(topic1X, topic1Y, topic1Z);
  let tr1 = random(20);
  let tg1 = random(0);
  let tb1 = random(100);
  let ta1 = 255;
  fill(tr1, tg1, tb1, ta1);

  // let tfr1 = 100;
  // let tfg1 = 100;
  // let tfb1 = 104;
  // let tfa1 = 255;
  // fill(tfr1, tfg1, tfb1, tfa1);
  stroke('white');

  sphere(30);
  pop();

  // 두 번째 주제부 위치 계산
  let topic2X = -180;
  let topic2Y = -100;
  let topic2Z = -170;

  // 두 번째 주제부 크기 조절
  let topic2Size = 20;

  // 주제부 그리기
  push();
  translate(topic2X, topic2Y, topic2Z);
  let tr2 = random(20);
  let tg2 = random(0);
  let tb2 = random(100);
  let ta2 = 255;
  fill(tr2, tg2, tb2, ta2);

  // let tfr2 = 100;
  // let tfg2 = 100;
  // let tfb2 = 104;
  // let tfa2 = 255;
  // fill(tfr2, tfg2, tfb2, tfa2);
  stroke('white');

  sphere(topic2Size); // 반지름을 변수로 설정
  pop();

  // 세 번째 주제부 위치 계산
  let topic3X = 80;
  let topic3Y = -180;
  let topic3Z = 100;

  // 세 번째 주제부 그리기
  push();
  translate(topic3X, topic3Y, topic3Z);
  let tr3 = random(20);
  let tg3 = random(0);
  let tb3 = random(100);
  let ta3 = 255;
  fill(tr3, tg3, tb3, ta3);

  // let tfr3 = 100;
  // let tfg3 = 100;
  // let tfb3 = 104;
  // let tfa3 = 255;
  // fill(tfr3, tfg3, tfb3, tfa3);
  stroke('white');

  sphere(20); // 반지름을 25로 변경
  pop();

  // 매개변수가 공간을 순회하면서 3D 모양 그리기

  //x=(1+sin(1πu)sin(1πv))sin(4πv)
  //y=(1+sin(1πu)sin(1πv))cos(4πv)
  //z=cos(1πu)sin(1πv)+4v-2
  //0≦u≦1
  //0≦v≦1

  for (let v = 0; v < 1; v += 1 / 100) {
    for (let u = 0; u < 1; u += 1 / 100) {
      // 매개변수를 이용하여 3D 모양 계산
      let x = (1 + sin(1 * PI * u) * sin(1 * PI * v)) * sin(4 * PI * v);
      let y = (1 + sin(1 * PI * u) * sin(1 * PI * v)) * cos(4 * PI * v);
      let z = cos(1 * PI * u) * sin(1 * PI * v) + 6 * v - 2;

      // 크기 조절
      x *= scl;
      y *= scl;
      z *= scl;

      // 변환 후 상자 그리기
      push();
      translate(x, y, z);

      let r = random(0);
      let g = random(90);
      let b = random(200);
      let a = random(255); // 투명도를 랜덤으로 설정
      fill(r, g, b, a);

      // let fr = 100;
      // let fg = 100;
      // let fb = 100;
      // let fa = 255;
      // stroke(fr, fg, fb, fa);
      stroke('white');

      box(12);
      pop();
    }
  }

  // 배경에 빛나는 별 그리기
  for (let i = 0; i < 30; i++) {
    let px = random(-width / 2, width / 2);
    let py = random(-height / 2, height / 2);
    let pz = random(-4000, 4000);

    push();
    translate(px, py, pz);
    fill(255, random(250)); // 투명도를 랜덤으로 설정
    noStroke();
    sphere(3);
    pop();
  }
}

// 윈도우 크기가 변경될 때 캔버스 크기도 조절
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
