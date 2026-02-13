//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (discount <0 && discount>100)
    {
        return 'Invalid'
    }

    if (typeof(discount) === 'number' && typeof(currentPrice) === 'number')
    {
        let dis = currentPrice * discount /100;
        return  (currentPrice - dis).toFixed(3);
    }
    else 
    {
        return 'Invalid'
    }

}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if (typeof(otp) === 'string')
    {
        if (otp.length === 8 && otp.startsWith('ph-'))
        {
            return true;
        }
        else 
        {
            return false;
        }
        
    }
    else 
    {
        return 'Invalid';
    }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    let r = omr.right;
    let w = omr.wrong;
    let s = omr.skip;
    if (r+w+s === 100)
    {
        return Math.ceil((r*1) - (w*0.50));
    }
    else 
    {
        return 'Invalid';
    }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    
    if (Array.isArray(array))
    {
        let ha = 0;
        let na = 0;
        for (let i of array)
        {
            if(i === 'ha')
            {
                ha++;
            }
            else if (i === 'na')
            {
                na++;
            }
        }

        if (ha > na)
        {
            return true;
        }
        else if (ha < na)
        {
            return false;
        }
        else if (ha === na)
        {
            return `equal`
        }
    }
    else 
    {
        return 'Invalid';
    }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    if (typeof(str)==='string' && str !== '' )
    {
        let stringSplit = str.split(' ')
        let charCount = 0;
        let longwords = ''
        let token = 0;

        for (let i of stringSplit)
        {
            token+=i.length;
            if (charCount < i.length)
            {
                charCount = i.length;
                longwords = i;
            }
        }

        return {longwords,token}
    }
    else 
    {
        return 'Invalid';
    }
} 

