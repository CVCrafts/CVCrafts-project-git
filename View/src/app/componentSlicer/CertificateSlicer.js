import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    certificateName:`Certified for compliance in the...`,
    certificateDescription:`It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.
    It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.
    It is a description that highlights your skills and expertise and it shows employers what assets you will bring to the role you are applying for.`,
}

export const  CertificateSlicer = createSlice({
    name:"Certificates",
    initialState,
    reducers:{
        addData(state,action){
            
        }
    }
})

export const { addData } = CertificateSlicer.actions
export default CertificateSlicer.reducer