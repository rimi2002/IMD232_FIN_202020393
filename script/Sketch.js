function setup() {
  // 캔버스 생성
  createCanvas(800, 800, WEBGL);

  // 원근 투영 설정
  ortho(-width / 2, width / 2, -height / 2, height / 2, -5000, 5000);
}

function draw() {
  // 배경 설정
  background(0);

  // 크기 조절 변수
  let scl = 100;

  // 마우스로 화면 회전 가능하도록 설정
  orbitControl();

  // 파라미터 공간을 순회하면서 3D 모양 그리기
  for (let v = 0; v < 1; v += 1 / 120) {
    for (let u = 0; u < 1; u += 1 / 120) {
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
      box(12);
      pop();
    }
  }
}
