import { saludar } from "./saludo.js";

describe("Saludar", () => {
    it("debería saludar en español correctamente", () => {
        expect(saludar("Carlos", "masculino", 35, "es")).toBe("Buenos días, señor, Carlos");
        expect(saludar("Ana", "femenino", 25, "es")).toBe("Buenas tardes, señorita, Ana");
    });

    it("debería saludar en inglés correctamente", () => {
        expect(saludar("John", "masculino", 40, "en")).toBe("Good morning, Mr., John");
        expect(saludar("Emily", "femenino", 20, "en")).toBe("Good afternoon, Miss, Emily");
    });
});
