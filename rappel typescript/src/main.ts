function afficher(value: unknown): void {
    if (typeof value === 'string') { // type guard
        console.log(value.toLowerCase());
    }
}

afficher(1);