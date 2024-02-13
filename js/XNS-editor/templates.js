var base = {
	"declaration": {
		"class": "LaClase",
		"modifiers": "public static",
		"type": "void",
		"name": "elMétodo",
		"arguments": []
	},
	"localVars": [],
	"statements": []
};

var buttonsDiagramTemplates = [{
	"type": "const tipo",
	"name": "NOMBRE",
	"value": "expresión"
}, {
	"type": "tipo",
	"name": "nombre"
}, {
	"type": "tipo",
	"name": "nombre",
	"value": "expresión"
}, {
	"type": "tipo",
	"name": "nombre"
}];

var newDeclaration = {
	"type": "tipo",
	"name": "nombre"
}

var switchCaseTemplate = {
	"case": "valor",
	"statements": []
}

var templates = [
	{
		"category": "Entrada / Salida",
		"items": [
			{
				"type": "input",
				"data": {
					"variable": "variable"
				}
			},
			{
				"type": "output",
				"data": {
					"message": "expresión"
				}
			}]
	},
	{
		"category": "Bloques",
		"items": [{
			"type": "comment",
			"data": {
				"content": "comentario"
			}
		}, {
			"type": "block",
			"data": {
				"content": "instrucción"
			}
		},
		{
			"type": "assignment",
			"data": {
				"variable": "variable",
				"value": "expresión"
			}
		},
		/*{
			"type": "break",
			"data": ""
		}*/]
	}, {
		"category": "Selección",
		"items": [
			{
				"type": "if",
				"data": {
					"condition": "condición",
					"then": [],
					"else": []
				}
			},
			{
				"type": "switch",
				"data": {
					"expression": "variable",
					"options": [{
						"case": "valor",
						"statements": []
					},
					{
						"case": "valor",
						"statements": []
					},
					{
						"case": "default",
						"statements": []
					}]
				}
			}]
	},
	{
		"category": "Repetición",
		"items": [{
			"type": "while",
			"data": {
				"condition": "condición",
				"statements": []
			}
		},
		{
			"type": "dowhile",
			"data": {
				"condition": "condición",
				"statements": []
			}
		},
		{
			"type": "for",
			"data": {
				"control": {
					"variable": "var",
					"start": "inicio",
					"stop": "fin",
					"step": "paso"
				},
				"statements": []
			}
		},
		{
			"type": "foreach",
			"data": {
				"control": {
					"class": "Tipo",
					"variable": "variable",
					"collection": "colección"
				},
				"statements": []
			}
		}]
	}, {
		"category": "Funciones / Métodos",
		"items": [
			{
				"type": "call",
				"data": {
					"statement": "función(params)"
				}
			},
			{
				"type": "return",
				"data": {
					"value": "expresión"
				}
			}]
	}
];