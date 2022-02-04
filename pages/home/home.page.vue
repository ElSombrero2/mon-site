<template>
  <div id="app">
    <div id="bg"></div>
    <div id="filter">
      <div class="description container">
        <div class="row">
          <div class="col-sm-2 legend">
            <p class="has-text-white">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Nam nostrum
              velit animi iusto, sed debitis sint, 
              repellat fugit omnis distinctio.
            </p>
          </div>
          <div class="col-sm-8" style="text-align: center;">
            <div class="main-title">
              <h1 class="big-title has-text-white">
                MY PROFILE
              </h1>
              <small class="has-text-white">
                It's a little description about me.
              </small>
            </div>
            <div class="title">
              <h1 class="big-title gradient" style="left: -130px;font-size: 60px;">
                Developer
              </h1>
            </div>
            <div class="title">
              <h1 class="big-title has-text-white" style="left: 130px;top: -20px;font-size: 75px;">
                Product Owner
              </h1>
            </div>
            <div class="title">
              <h1 class="big-title gradient" style="left: -50px;font-size: 100px;top: -40px;">
                Designer
              </h1>
            </div>
            <div class="title">
              <button class="button is-white start" style="position: relative;top: -42px;">Get Started</button>
            </div>
          </div>

          <div class="col-sm-2 legend" style="margin-top: 250px">
            <p class="has-text-white">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Nam nostrum
              velit animi iusto, sed debitis sint.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-container" style="position: relative; top: -50px">
      <div class="head">
        <a href="#container" class="button is-primary is-outlined" style="transition: all 500ms;">
          <i class="fa fa-arrow-down"></i>
        </a>
      </div>
      <div class="container" id="container">
        <div class="row">
          <div class="col-sm-8">
            <p>Story Behind</p>
            <h1 class="title has-text-white is-1">
              Esse vitae perferendis at minima libero ipsam amet, sapiente tempora dolorem molestias doloremque.
            </h1>
            <p style="max-width: 500px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolorum ea sapiente eum dolorem corrupti hic ipsam 
              numquam quaerat, at animi, natus omnis laborum fuga in! Vel 
              quia tempore veniam maiores.Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolorum ea sapiente eum dolorem corrupti hic ipsam 
              <br><br>
              numquam quaerat, at animi, natus omnis laborum fuga in! Vel 
              quia tempore veniam maiores.Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolorum ea sapiente eum dolorem.
            </p>
            <br><br>
            <div class="card-custom vertical">
              <div class="back">
                <div class="card-content">
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4" style="padding-left: 150px;">
            <div class="card-custom">
              <div class="back">
                <div class="card-content">
                </div>
              </div>
            </div>
            <br><br>
            <div style="width: 100%">
              <div class="card-custom" style="position: relative; right: 350px;">
                <div class="back" style="background: #f47ede">
                  <div class="card-content" style="border-color: #f47ede">
                  </div>
                </div>
              </div>
              <p style="margin-top: -200px;" class="has-text-white">
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Nesciunt, delectus non sint corporis 
                commodi impedit eum debitis in iure fugiat quis 
                esse repellat sapiente hic mollitia rerum saepe? Quos, facilis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./home.page.ts" lang="ts"></script>
<style src="./home.page.scss" lang="scss"></style>