<script>
    const slider = document.getElementById("slider");
    const value = document.getElementById("value");

    slider.addEventListener("input", function() {
        value.value = slider.value;
    });

    value.addEventListener("input", function() {
        let number = Number(value.value);

        if (number >= 1 && number <= 100) {
            slider.value = number;
        }
    });

    function submitAnswer() {
        document.getElementById("result").textContent =
            "You selected " + slider.value + "%.";
    }
</script>
