// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为滑块元素添加值变化监听
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const valueDisplay = document.getElementById(slider.dataset.valueId);
        if (valueDisplay) {
            slider.addEventListener('input', function() {
                valueDisplay.textContent = slider.value;
            });
        }
    });

    // 模拟实验开始按钮点击事件
    const startButtons = document.querySelectorAll('.start-experiment-btn');
    startButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 这里只是简单的切换显示模拟动画的class
            const simulationElement = document.querySelector(button.dataset.targetSim);
            if (simulationElement) {
                simulationElement.classList.toggle('running');
                if (button.textContent === '开始下落') {
                    button.textContent = '重置';
                    startAnimation();
                } else {
                    button.textContent = '开始下落';
                    resetAnimation();
                }
            }
        });
    });

    // 实验动画相关函数（简单模拟）
    function startAnimation() {
        // 在真实项目中，这里会有真正的物理引擎计算
        console.log('动画开始');
    }

    function resetAnimation() {
        // 在真实项目中，这里会重置物理模拟状态
        console.log('动画重置');
    }
});

// 模拟数据生成函数（用于图表展示）
function generateSimulationData() {
    const data = [];
    // 模拟生成自由落体的位置-时间数据
    for (let t = 0; t <= 5; t += 0.1) {
        // s = 1/2 * g * t^2, 假设初始高度为10米
        const position = 10 - 0.5 * 9.8 * t * t;
        if (position >= 0) {
            data.push({
                time: t.toFixed(1),
                position: position.toFixed(2),
                velocity: (9.8 * t).toFixed(2)
            });
        }
    }
    return data;
}

// 底部导航切换功能
function switchTab(tabName) {
    // 实际项目中这里会处理页面导航
    console.log('切换到标签: ' + tabName);
} 