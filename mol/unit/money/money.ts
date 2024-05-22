
	
	class $mol_unit_money extends $mol_unit {
	}
	
	class $mol_unit_money_usd extends $mol_unit_money {
		prefix() {
			return '$'
		}
	}
	
	class $mol_unit_money_rur extends $mol_unit_money {
		postfix() {
			return ' ₽'
		}
	}
	


 export {$mol_unit_money,$mol_unit_money_usd,$mol_unit_money_rur}