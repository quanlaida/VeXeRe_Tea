function callBackFuntion(errors, value) {
    if (errors) {
        return new Error(errors);
    } else {
        // Xử lý value
    }
}

// Khi chưa có promiss hay async await thì người ta dùng cb