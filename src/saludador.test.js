import { saludar } from "./saludo.js";

describe("Saludar", () => {
    it("debería saludar en la mañana con nombre y género masculino sin tratamiento formal", () => {
        jest.spyOn(global.Date.prototype, 'getHours').mockReturnValue(8);
        expect(saludar("Carlos", "masculino", 25)).toBe("Buenos días, Carlos");
    });

    it("debería saludar en la tarde con nombre y género femenino con tratamiento formal", () => {
        jest.spyOn(global.Date.prototype, 'getHours').mockReturnValue(15);
        expect(saludar("Ana", "femenino", 40)).toBe("Buenas tardes, señora, Ana");
    });

    it("debería saludar en la noche con tratamiento formal masculino", () => {
        jest.spyOn(global.Date.prototype, 'getHours').mockReturnValue(22);
        expect(saludar("Luis", "masculino", 35)).toBe("Buenas noches, señor, Luis");
    });

    it("debería saludar en la noche sin tratamiento formal si la edad es menor o igual a 30", () => {
        jest.spyOn(global.Date.prototype, 'getHours').mockReturnValue(22);
        expect(saludar("Pedro", "masculino", 28)).toBe("Buenas noches, Pedro");
    });

    it("debería saludar sin nombre ni género ni edad", () => {
        jest.spyOn(global.Date.prototype, 'getHours').mockReturnValue(10);
        expect(saludar()).toBe("Buenos días");
    });
});
