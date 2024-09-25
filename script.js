document.getElementById('perfumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 生成随机香水配方
    const mainNotes = ['柑橘', '玫瑰', '香草', '麝香', '茉莉'];
    const supportingNotes = ['佛手柑', '橙花', '雪松', '琥珀', '檀香'];
    const randomMainNote = mainNotes[Math.floor(Math.random() * mainNotes.length)];
    const randomSupportingNotes = supportingNotes.map(note => note).slice(0, Math.floor(Math.random() * 3) + 1);

    // 显示随机香水配方
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>你的香水配方</h3>
        <p>主香调: ${randomMainNote}</p>
        <p>辅助香调: ${randomSupportingNotes.join(', ')}</p>
        <button onclick="generateRandomFormula()">重新生成</button>
        <button onclick="goToConfirmPage()">确认配方</button>
    `;
});

function generateRandomFormula() {
    const mainNotes = ['柑橘', '玫瑰', '香草', '麝香', '茉莉'];
    const supportingNotes = ['佛手柑', '橙花', '雪松', '琥珀', '檀香'];
    const randomMainNote = mainNotes[Math.floor(Math.random() * mainNotes.length)];
    const randomSupportingNotes = supportingNotes.map(note => note).slice(0, Math.floor(Math.random() * 3) + 1);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>你的香水配方</h3>
        <p>主香调: ${randomMainNote}</p>
        <p>辅助香调: ${randomSupportingNotes.join(', ')}</p>
        <button onclick="generateRandomFormula()">重新生成</button>
        <button onclick="goToConfirmPage()">确认配方</button>
    `;
}

function goToConfirmPage() {
    window.location.href = 'comfirm.html';
}



document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // 显示提交成功的提示
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    // 这里可以添加代码将收货信息发送到服务器或显示确认信息
    alert(`订单已提交!\n姓名: ${name}\n地址: ${address}\n电话: ${phone}`);

    // 清空表单
    document.getElementById('shippingForm').reset();

    // 跳转到成功页面
    window.location.href = 'success.html';
});