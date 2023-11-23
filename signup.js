function signUpCheck() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('passwordCheck').value;
    const man = document.getElementById('man').checked;
    const woman = document.getElementById('woman').checked;
    const signUpButton = document.getElementById('signUpButton');

    const passwordCheckError = document.getElementById('passwordCheckError');

    // 비밀번호 확인
    if (password !== passwordCheck) {
        passwordCheckError.textContent = '비밀번호가 일치하지 않습니다.';
        signUpButton.disabled = true;
    } else {
        passwordCheckError.textContent = '';
        signUpButton.disabled = false;
    }
}

// 각 입력 필드나 라디오 버튼의 값이 변경될 때마다 signUpCheck 함수 호출
document.getElementById('id').addEventListener('input', signUpCheck);
document.getElementById('name').addEventListener('input', signUpCheck);
document.getElementById('password').addEventListener('input', signUpCheck);
document.getElementById('passwordCheck').addEventListener('input', signUpCheck);
document.getElementById('man').addEventListener('change', signUpCheck);
document.getElementById('woman').addEventListener('change', signUpCheck);