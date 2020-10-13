module.exports = function toReadable (number) {
		
		
		var string = number.toString(), units, tens, scales, start, end, fragments, fragmentsLen, fragment, ints, i, word, words;
	  
		
		string = string.replace(/[, ]/g,"");
	  
		
		if( parseInt( string ) === 0 ) {
		  return 'zero';
		}
		
	  
		units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
		
		
		tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
		
		
		scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];
		
		
		start = string.length;
		fragments = [];
		while( start > 0 ) {
		  end = start;
		  fragments.push( string.slice( start = Math.max( 0, start - 3 ) )), end  ;
		}
		
		
		fragmentsLen = fragments.length;
		if( fragmentsLen > scales.length ) {
		  return '';
		}
		
		
		words = [];
		for( i = 0; i < fragmentsLen; i++ ) {
		  
		  fragment = parseInt( fragments[i] );
		  
		  if( fragment ) {
			
			
			ints = fragments[i].split( '' ).reverse().map( parseFloat );
		  
			
			if( ints[1] === 1 ) {
			  ints[0] += 10;
			}
			
			
			if( ( word = scales[i] ) ) {
			  words.push( word );
			}
			
			
			if( ( word = units[ ints[0] ] ) ) {
			  words.push( word );
			}
			
			
			if( ( word = tens[ ints[1] ] ) ) {
			  words.push( word );
			}
			
			if( ( word = units[ ints[2] ] ) ) {
			  words.push( word + ' hundred' );
			}
			
		  }
		  
		}
		
		return words.reverse().join( ' ' );
	  }

