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
}

function draw() {
  // 배경 설정
  background(0);

  // 크기 조절 변수
  let scl = 90;

  // 마우스로 화면 회전 가능하도록 설정
  orbitControl();

  // 파라미터 공간을 순회하면서 3D 모양 그리기
  for (let v = 0; v < 1; v += 1 / 100) {
    for (let u = 0; u < 1; u += 1 / 100) {
      // 파라미터를 이용하여 3D 모양 계산
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

      // 색상 랜덤으로 설정
      let r = random(0);
      let g = random(100);
      let b = random(255);
      let a = 100;
      fill(r, g, b, a);
      stroke('#D6D7E2');

      box(12);
      pop();
    }
  }
}

// 윈도우 크기가 변경될 때 캔버스 크기도 조절
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
