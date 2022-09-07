import React from 'react'

const BloodVolumes = () => {
  return (
    
        <div class="overview">
            
            <div class="ad-title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Dashboard</span>
            </div>

            <div class="ad-boxes">
                <div class="box box1">
                    <span class="number">A+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">5266</span>
                </div>
                <div class="box box2">
                    <span class="number">B+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">6584</span>
                </div>
                <div class="box box3">
                    <span class="number">AB+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">1269</span>
                </div>
                <div class="box box4">
                    <span class="number">O+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">563</span>
                </div>
            </div>

            <br/>

            <div class="ad-boxes">
                <div class="box box5">
                    <span class="number">A-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">4789</span>
                </div>
                <div class="box box6">
                    <span class="number">B-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">6523</span>
                </div>
                <div class="box box7">
                    <span class="number">AB-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">9856</span>
                </div>
                <div class="box box8">
                    <span class="number">O-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">489</span>
                </div>
            </div>
        </div>

  )
}

export default BloodVolumes